import { snippets } from "./snippets.js";

const rows = document.querySelectorAll("#table1 tr");
let openRow = null;
let openIndex=null;

rows.forEach((row, index) => {
  row.addEventListener("click", () => {
    // Skip the first row (header row)
    if (index === 0) return;

    if(openIndex===index){
        openRow.remove();
        openRow = null; 
        openIndex=null;
        return;
    }

    // Remove previously opened row (if any)
    if (openRow !== null) {
      openRow.remove();
      openRow = null;
    }

    // Get the corresponding snippet (adjust index since we skipped header)
    const snippet = snippets[index - 1];
    if (!snippet) return;

    // Create a new table row and cell
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newCell.colSpan = 4;

    // Create the Prism-highlighted code block
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.className = "language-javascript";
    code.textContent = snippet.code;

    // Append everything
    pre.appendChild(code);
    newCell.appendChild(pre);
    newRow.appendChild(newCell);

    // Insert the row after the clicked one
    row.insertAdjacentElement("afterend", newRow);

    // Highlight the code with Prism
    Prism.highlightElement(code);

    
    openRow = newRow;
    openIndex=index;
  });
});