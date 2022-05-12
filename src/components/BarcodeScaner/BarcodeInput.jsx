function BarcodeInput({ barcode, onBarcodeWritting, handleKeyPress }) {
  return (
    <div>
      <input
        type="number"
        value={barcode}
        onChange={(event) => onBarcodeWritting(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Entrer votre Code Barre"
        className="w-64 h-8 mr-4 font-standard_font text-black placeholder:text-slate-400 bg-white 
          border border-solid border-gray-500 rounded-md text-center focus:text-black focus:bg-slate-100 focus:border-border_button focus:outline-none focus:text-center"
      />
    </div>
  );
}

export default BarcodeInput;
