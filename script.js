
const obf = "MTIzNDU2";

function decodeObf(s){
  try {
    const decoded = atob(s);
    return decoded;
  } catch(e){
    return null;
  }
}

console.log("Dev-hint: run decodeObf(obf) to try one hidden flag");
console.log("Dev-hint: obf variable available in console");

document.getElementById('reveal-btn').addEventListener('click', () => {
  const f = decodeObf(obf);
  if(f) {
    console.log("Decoded (maybe) flag:", f);
    alert("Check console (devtools) for a decoded hint.");
  } else {
    console.log("No decode available. Try other methods.");
    alert("Check console (devtools) for hints.");
  }
});

