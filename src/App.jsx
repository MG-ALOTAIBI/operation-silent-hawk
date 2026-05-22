import React, { useState } from "react";
import "./App.css";
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbw0oay3R3VWg7dJduuHBK_gZaQ7QI3Upduv8u-lHUIHs_mUuAEITBOYNvSVabX2nGJmsQ/exec";

const flights = [
  {
    id: "hawk",
    name: "HAWK",
    nation: "Kuwait",
    aircraft: "F/A-18C Hornet",
    role: "Primary Strike",
    size: "3 Ship",
    tails: "421 / 422 / 433",
    loadout:
      "3x Fuel Tanks, LITENING TGP, 2x GBU-38, 1x GBU-32, AIM-120C, 2x AIM-9X",
    objective:
      "Destroy HVT ALPHA, confirm and strike HVT BRAVO convoy, then search and destroy missile launchers near Mubarakabad.",
  },
  {
    id: "viper",
    name: "VIPER",
    nation: "Bahrain",
    aircraft: "F-16C Fighting Falcon",
    role: "Interdiction / DEAD",
    size: "2 Ship",
    tails: "1601 / 1602",
    loadout: "3x Fuel Tanks, LITENING TGP, 4x GBU-38",
    objective:
      "Strike Lar Airfield, destroy transport aircraft and any enemy fighters on the ramp, then locate and destroy missile launcher near Shaher-e-Jadid.",
  },
  {
    id: "wolf",
    name: "WOLF",
    nation: "UAE",
    aircraft: "F-16C Fighting Falcon",
    role: "SEAD / CAP",
    size: "2 Ship",
    tails: "3091 / 3092",
    loadout:
      "4x AGM-88C HARM, 3x Fuel Tanks, LITENING TGP, AN/ASQ-213 HTS, 4x AIM-120C",
    objective:
      "Destroy SA-6, destroy SA-10 tracking radar, then hold CAP orbit and protect coalition strike packages.",
  },
];

const supportAssets = [
  {
    title: "OVERLORD",
    role: "AWACS",
    details: "305.000 MHz AM // 30,000 ft // Orbit: Ras Al Khaimah",
  },
  {
    title: "ARCO",
    role: "KC-135MPRS",
    details: "271.000 MHz AM // TACAN 71X // 25,000 ft // 270 KTS",
  },
  {
    title: "SHELL",
    role: "KC-135",
    details: "277.000 MHz AM // TACAN 77X // 23,000 ft // 300 KTS",
  },
];

const threats = [
  "MiG-29",
  "F-14",
  "MiG-23",
  "SA-2",
  "SA-3",
  "SA-6",
  "SA-11 Buk",
  "HQ-7B",
  "SA-15",
  "SA-19",
  "SA-10",
  "AAA",
];

export default function App() {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    pilot: "",
    discord: "",
    preferred: "",
    backup: "",
    experience: "",
    notes: "",
  });

 async function submitApplication(e) {
  e.preventDefault();

  if (!form.pilot || !form.discord || !form.preferred) {
    alert("Please write your pilot name, Discord name, and preferred flight.");
    return;
  }

  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(form),
    });

    setApplications([...applications, form]);

    setForm({
      pilot: "",
      discord: "",
      preferred: "",
      backup: "",
      experience: "",
      notes: "",
    });

    alert("Application submitted successfully.");
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <div className="site-shell">
      <header className="hero-section">
        <div className="classification-bar">
          <span>RED HAWKS AIR OPERATIONS</span>
          <span>COALITION EYES ONLY</span>
          <span>مركز العمليات الجوية</span>
        </div>

        <div className="hero-content">
          <div className="operation-badge">عملية الصقر الصامت</div>
          <h1>OPERATION SILENT HAWK</h1>
          

          <div className="hero-meta-grid">
            <div>
              <span>Date</span>
              <strong>26 FEB 2026</strong>
            </div>
            <div>
              <span>MISSION START</span>
              <strong>17:30L</strong>
            </div>
            <div>
              <span>Theater</span>
              <strong>Persian Gulf</strong>
            </div>
            <div>
              <span>Bullseye</span>
              <strong>Khasab</strong>
            </div>
          </div>

          <a href="#apply" className="primary-action">
            Apply for Mission
          </a>
        </div>
      </header>

      <main className="main-container">
        <section className="overview-grid">
          <div className="panel large-panel">
            <p className="section-label">MISSION OVERVIEW</p>
            <h2>Strategic retaliation before a second missile wave.</h2>
            <p>
              Following coordinated missile and drone attacks against GCC nations and
              coalition assets, Operation Silent Hawk will target senior enemy command,
              missile launch capability, and critical air-defense infrastructure in the
              Lar sector.
            </p>
            <p>
              The mission is designed as a high-detail cinematic military operation for
              Red Hawks members, using realistic coalition package tasking and
              intelligence-driven target priorities.
            </p>
          </div>

          <div className="panel danger-panel">
            <p className="section-label">FAILURE CONSEQUENCES</p>
            <ul>
              <li>Second missile strike becomes permanent.</li>
              <li>GCC airbases become priority targets.</li>
              <li>Enemy command leadership escapes.</li>
              <li>Future ground invasion plan is activated.</li>
            </ul>
          </div>
        </section>

        <section className="targets-section">
          <p className="section-label">PRIORITY TARGETS</p>
          <div className="target-grid">
            <div className="target-card priority-one">
              <span>Priority 1</span>
              <h3>HVT ALPHA</h3>
              <p>Major General Reza Farhadi</p>
              <small>Strategic missile operations commander</small>
            </div>
            <div className="target-card priority-one">
              <span>Priority 1</span>
              <h3>HVT BRAVO</h3>
              <p>Brigadier General Amir Hosseini</p>
              <small>Integrated air defense commander</small>
            </div>
            <div className="target-card">
              <span>Priority 2</span>
              <h3>Missile Launchers</h3>
              <p>Mubarakabad / Shaher-e-Jadid sectors</p>
              <small>Mobile launcher search and destroy</small>
            </div>
            <div className="target-card">
              <span>Priority 3</span>
              <h3>SA-10 Site</h3>
              <p>Tracking radar only</p>
              <small>6 launchers reported in the site</small>
            </div>
          </div>
        </section>

        <section className="package-section">
          <div className="section-heading">
            <p className="section-label">COALITION AIR PACKAGE</p>
            <h2>Flight Package Cards</h2>
          </div>

          <div className="flight-grid">
            {flights.map((flight) => (
              <div className="flight-card" key={flight.id}>
                <div className="flight-header">
                  <div>
                    <h3>{flight.name}</h3>
                    <p>{flight.nation}</p>
                  </div>
                  <span>{flight.size}</span>
                </div>
                <div className="aircraft-line">{flight.aircraft}</div>
                <div className="flight-info">
                  <p>
                    <b>Role:</b> {flight.role}
                  </p>
                  <p>
                    <b>Tail Numbers:</b> {flight.tails}
                  </p>
                  <p>
                    <b>Loadout:</b> {flight.loadout}
                  </p>
                  <p>
                    <b>Objective:</b> {flight.objective}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="panel">
            <p className="section-label">SUPPORT ASSETS</p>
            {supportAssets.map((asset) => (
              <div className="support-card" key={asset.title}>
                <h3>{asset.title}</h3>
                <span>{asset.role}</span>
                <p>{asset.details}</p>
              </div>
            ))}
          </div>

          <div className="panel">
            <p className="section-label">THREAT MATRIX</p>
            <div className="threat-list">
              {threats.map((threat) => (
                <span key={threat}>{threat}</span>
              ))}
            </div>
          </div>

          <div className="panel">
            <p className="section-label">ENVIRONMENT</p>
            <p>Day-to-night transition operation.</p>
            <p>Partially cloudy conditions.</p>
            <p>Wind: 4 kts at 33 ft.</p>
            <p>Wind: 8 kts at 1600 ft.</p>
            <p>Two aerial refueling phases planned.</p>
          </div>
        </section>

        <section id="apply" className="application-section">
          <div className="panel application-panel">
            <div>
              <p className="section-label">MISSION APPLICATION</p>
              <h2>Apply for Operation Silent Hawk</h2>
              <p>
                Applications are reviewed by the mission organizer before final slot
                confirmation. Write your real Discord name so MG can identify you.
              </p>
            </div>

            <form onSubmit={submitApplication} className="application-form">
              <input
                placeholder="Pilot name"
                value={form.pilot}
                onChange={(e) => setForm({ ...form, pilot: e.target.value })}
              />
              <input
                placeholder="Discord name"
                value={form.discord}
                onChange={(e) => setForm({ ...form, discord: e.target.value })}
              />
              <select
                value={form.preferred}
                onChange={(e) => setForm({ ...form, preferred: e.target.value })}
              >
                <option value="">Preferred flight</option>
                <option>HAWK // Kuwaiti F/A-18C</option>
                <option>VIPER // Bahraini F-16C</option>
                <option>WOLF // UAE F-16C</option>
                <option>F-15 // Air Superiority</option>
              </select>
              <select
                value={form.backup}
                onChange={(e) => setForm({ ...form, backup: e.target.value })}
              >
                <option value="">Backup flight</option>
                <option>HAWK // Kuwaiti F/A-18C</option>
                <option>VIPER // Bahraini F-16C</option>
                <option>WOLF // UAE F-16C</option>
                <option>F-15 // Air Superiority</option>
              </select>
              <input
                placeholder="Experience level / aircraft experience"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.target.value })}
              />
              <textarea
                placeholder="Notes / preferred role / availability"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
              <button type="submit">Submit Application</button>
            </form>
          </div>

          <div className="panel roster-panel">
            <p className="section-label">APPLICATION ROSTER</p>
            {applications.length === 0 ? (
              <p className="muted">No applications submitted yet.</p>
            ) : (
              <div className="roster-list">
                {applications.map((app, index) => (
                  <div className="roster-item" key={index}>
                    <h3>{app.pilot}</h3>
                    <p>{app.discord}</p>
                    <p>
                      <b>Preferred:</b> {app.preferred}
                    </p>
                    {app.backup && (
                      <p>
                        <b>Backup:</b> {app.backup}
                      </p>
                    )}
                    {app.experience && <small>{app.experience}</small>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="discord-section">
          <div>
            <p className="section-label">RED HAWKS DISCORD</p>
            <h2>Join the operation room.</h2>
            <p>
              Mission organizer: <b>MG</b>. For questions, role changes, or final
              confirmation, contact <b>MG</b> inside the Red Hawks Discord server.
            </p>
          </div>
          <a href="https://discord.gg/fFYWeT2k" target="_blank" rel="noreferrer">
            Join Discord
          </a>
        </section>
      </main>
    </div>
  );
}
