export function formatNumber(number: number) {
    if (number === 0) {
      return "0"; // Handle zero explicitly
    }
  
    const suffixes = ["", "K", "M", "B", "T"];
    const magnitude = Math.floor(Math.log10(Math.abs(number)) / 3); // Use Math.abs to avoid negative infinity
    const formattedNumber = number / Math.pow(10, magnitude * 3);
    return formattedNumber.toFixed(1) + suffixes[magnitude];
  }
  

export function formatDate(dateString: string){
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const simplifiedHumanReadable = date.toLocaleDateString('en-IN', options);
    return simplifiedHumanReadable;
}
