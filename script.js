async function getIPInfo() {
  const ipRes = await fetch("https://ipapi.co/json/");
  const data = await ipRes.json();
  document.getElementById("ip").innerText = data.ip;
  document.getElementById("location").innerText = data.city + ", " + data.region + ", " + data.country_name;
}

function getCookies() {
  const cookies = document.cookie.split(";").filter(c => c.trim() !== "");
  document.getElementById("cookies").innerText = cookies.length;
}

async function getFingerprint() {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  document.getElementById("fingerprint").innerText = result.visitorId;
}

async function getPermissions() {
  const perms = ["geolocation", "camera", "microphone"];
  let results = [];
  for (let perm of perms) {
    try {
      const status = await navigator.permissions.query({ name: perm });
      results.push(`${perm}: ${status.state}`);
    } catch {}
  }
  document.getElementById("permissions").innerText = results.join(", ");
}

function calcExposure() {
  const count = document.cookie.length + Math.random() * 1000;
  let level = count > 500 ? "🚨 Alta" : "🟡 Moderada";
  document.getElementById("exposure").innerText = level;
}

getIPInfo();
getCookies();
getFingerprint();
getPermissions();
calcExposure();
