import React, { useContext, useEffect, useRef, useState } from "react";
import Quagga from "quagga";
import BarcodeInput from "./BarcodeInput";
import stopcamera from "@assets/barcode_logo_stop.png";
import camera from "@assets/barcode_logo.png";
import { getProduct } from "@services/api";
import ProductContext from "@context/ProductContext";

function BarCodeScan() {
  const firstUpdate = useRef(true);
  const [isStart, setIsStart] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [actualBarcode, setActualBarcode] = useState("");
  const {
    setProductImage,
    setProductName,
    setProductScore,
    setBarcodeContext,
    barcodeContext,
  } = useContext(ProductContext);

  async function fetchData() {
    await getProduct(barcode);
  }

  useEffect(() => {
    fetchData();
  }, [setBarcode]);

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      setBarcodeContext(actualBarcode);

      console.log(barcode);

      fetch(
        `https://world.openfoodfacts.org/api/v0/product/${actualBarcode}.json`
      )
        .then((res) => res.json())
        .then((data) => {
          setProductImage(data.product.image_small_url);
          setProductName(data.product.product_name_fr);
          setProductScore(data.product.ecoscore_grade);
        });
    }
  };

  useEffect(() => {
    return () => {
      if (isStart) stopScanner();
    };
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (isStart) startScanner();
    else stopScanner();
  }, [isStart]);

  const _onDetected = (res) => {
    // stopScanner();
    setBarcode(res.codeResult.code);
  };

  const startScanner = () => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            facingMode: "environment", // or user
          },
        },
        numOfWorkers: navigator.hardwareConcurrency,
        locate: true,
        frequency: 1,
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true,
        },
        multiple: false,
        locator: {
          halfSample: false,
          patchSize: "large", // x-small, small, medium, large, x-large
          debug: {
            showCanvas: false,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: false,
              showTransformedBox: false,
              showBB: false,
            },
          },
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
            "i2of5_reader",
            "2of5_reader",
            "code_93_reader",
          ],
        },
      },
      (err) => {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(_onDetected);
    Quagga.onProcessed((result) => {
      let drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute("width")),
            parseInt(drawingCanvas.getAttribute("height"))
          );
          result.boxes
            .filter((box) => box !== result.box)
            .forEach((box) => {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: "green",
                lineWidth: 2,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: "#00F",
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(
            result.line,
            { x: "x", y: "y" },
            drawingCtx,
            { color: "red", lineWidth: 3 }
          );
        }
      }
    });
  };

  const stopScanner = () => {
    Quagga.offProcessed();
    Quagga.offDetected();
    Quagga.stop();
  };

  return (
    <div className="flex items-center p-4">
      {!isStart && (
        <BarcodeInput
          barcode={actualBarcode}
          onBarcodeWritting={setActualBarcode}
          handleKeyPress={onKeyPress}
        />
      )}
      <div>
        <button
          type="button"
          className=""
          onClick={() => setIsStart((prevStart) => !prevStart)}
        >
          {isStart ? (
            <div className="flex flex-col items-center">
              <React.Fragment>
                <div id="scanner-container" className="w-[20rem]" />
              </React.Fragment>
              <span>
                <img src={stopcamera} className="h-20" alt="Barcode logo" />{" "}
              </span>
            </div>
          ) : (
            <span>
              <img src={camera} className="h-10" alt="Barcode logo" />{" "}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

export default BarCodeScan;
