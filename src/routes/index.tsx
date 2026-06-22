import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LeforseHome,
})

function LeforseHome() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="nav-brand">
          <div className="nav-crest">
            <svg viewBox="0 0 16 16">
              <path d="M8 1 L14 5 L14 11 L8 15 L2 11 L2 5 Z" stroke="#c9a653" strokeWidth="1" fill="none"/>
              <path d="M8 4 L11 6 L11 10 L8 12 L5 10 L5 6 Z" stroke="#c9a653" strokeWidth="0.75" fill="none"/>
            </svg>
          </div>
          <span className="nav-wordmark">Leforse Luxury Limo</span>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <a href="tel:8335336773" className="nav-dispatch">833-533-6773 (LEFORSE)</a>
        </nav>
        <button
          className="hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </header>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#fleet" onClick={() => setMobileOpen(false)}>Fleet</a>
        <a href="#security" onClick={() => setMobileOpen(false)}>Security</a>
        <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
        <a href="tel:8335336773" className="mobile-dispatch">24/7 Dispatch — 833-533-6773 (LEFORSE)</a>
      </div>

      <main>

        {/* SECTION 1 — HERO */}
        <section id="hero">
          <div className="hero-type">
            <span className="label hero-eyebrow">Executive Car Service — NYC &amp; Tri-State — Est. 1991</span>
            <div className="hero-metric">33<sup>+</sup></div>
            <div className="hero-deco-rule" />
            <div className="hero-deco-rule" />
            <span className="label hero-metric-label">Years Discreetly On Time</span>
            <h1 className="hero-headline">Chauffeured Executive Cars With Trained Security Protection.</h1>
            <p className="hero-sub">Serving NYC and the tri-state area since 1991.</p>
            <div className="btn-group">
              <a href="https://book.mylimobiz.com/v4/leforseluxury" className="btn-primary">Reserve Online</a>
              <a href="tel:8335336773" className="btn-secondary">Call 833-533-6773</a>
            </div>
            <span className="label hero-trust">3 Decades. Zero Disclosed Incidents.</span>
          </div>
          <div className="hero-image">
            <div className="hero-seam" />
            <img
              src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Hero_interior_luxury_spacious_SUV_back_seat_leath_57809b28-0026-496c-ad1b-5da8e7f1d914_2_zxrkhl.png"
              alt="Luxury executive SUV interior with premium leather seating"
            />
          </div>
        </section>

        {/* SECTION 2 — PROOF NUMBERS */}
        <section id="proof-numbers">
          <p className="label proof-kicker">By the Numbers</p>
          <div className="proof-grid">
            <div className="stat stat--lead">
              <span className="stat-num">33<sup style={{fontSize:'0.25em',verticalAlign:'super'}}>+</sup></span>
              <span className="stat-label">Years in Service</span>
            </div>
            <div className="stat stat--founded">
              <span className="stat-num">1991</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat stat--dispatch">
              <span className="stat-num">24/7</span>
              <span className="stat-label">Dispatch Desk</span>
            </div>
            <div className="stat stat--licensed">
              <span className="stat-num">100%</span>
              <span className="stat-label">TLC-Licensed &amp; Insured Fleet</span>
            </div>
            <div className="stat stat--pickup">
              <span className="stat-num">&lt;15 <span className="stat-unit">min</span></span>
              <span className="stat-label">Avg Pickup Across Manhattan</span>
            </div>
          </div>
        </section>

        {/* SECTION 3 — SERVICES */}
        <section id="services">
          <div className="services-image-band">
            <img
              src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Services_section_luxury_cabin_interior_detail_sho_818fe403-c799-4c0c-9672-4f9030b0ede0_3_amaicz.png"
              alt="Luxury cabin interior detail"
              style={{ position: 'absolute', top: 0, left: 0 }}
            />
          </div>
          <div className="services-inner">
            <h2 className="section-headline">What We Drive You Through.</h2>
            <div className="services-grid">
              <div className="service-card">
                <span className="service-num label">01</span>
                <h3 className="service-title">Executive Sedan &amp; SUV Transfers</h3>
                <p className="service-body">Door-to-door precision for board meetings, private dinners, and multi-stop executive days. Your chauffeur confirms the route and arrival window the evening prior. Curbside protocol is established on first booking and maintained on every subsequent run — no re-briefing required.</p>
              </div>
              <div className="service-card">
                <span className="service-num label">02</span>
                <h3 className="service-title">Secure Transport — EP-Trained Chauffeurs</h3>
                <p className="service-body">Every chauffeur completes executive protection and defensive driving training. Advance route surveys on elevated-risk assignments. Coordination available with in-house or client security teams. Optional armored vehicles on request. Vetted, bonded, and held to a signed confidentiality standard.</p>
              </div>
              <div className="service-card">
                <span className="service-num label">03</span>
                <h3 className="service-title">Airport Meet-and-Greet</h3>
                <p className="service-sub">JFK · LGA · EWR · Teterboro</p>
                <p className="service-body">Flight-tracked arrivals at all four metro airports. Your chauffeur meets you airside at the gate or curbside — your preference set once, held permanently. Private aviation coordination at Teterboro handled with direct FBO contact. No app, no surge, no guesswork.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SECURITY */}
        <section id="security">
          <div className="security-inner">
            <div className="security-image">
              <img
                src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Security_section_professional_chauffeur_headshot__72e0b0a1-8b05-4845-afa7-1ba2bfdf5ca8_2_gb5un9.png"
                alt="Professional chauffeur security detail"
              />
            </div>
            <div className="security-copy">
              <span className="label security-eyebrow">Why Us Over a Black-Car App</span>
              <h2 className="security-headline">This Is Not a Rideshare With a Suit On.</h2>
              <ul className="security-bullets">
                <li>
                  <strong>Defensive &amp; Evasive Driving Training</strong>
                  Chauffeurs trained in threat recognition, counter-surveillance, and vehicle extraction — not just route optimization.
                </li>
                <li>
                  <strong>Advance Route Surveys</strong>
                  High-risk or high-profile assignments receive prior route assessments. Alternates identified before you're in the vehicle.
                </li>
                <li>
                  <strong>Executive Protection Coordination</strong>
                  We work within your existing security detail or operate as the transport layer for a broader EP operation.
                </li>
                <li>
                  <strong>Optional Armored Vehicles</strong>
                  B4–B6 level armored options available on request for principals requiring a hardened transport solution.
                </li>
              </ul>
              <span className="label security-pull">Vetted. Trained. Accountable.</span>
            </div>
          </div>
        </section>

        {/* SECTION 5 — FLEET */}
        <section id="fleet">
          <h2 className="section-headline">The Fleet.</h2>
          <div className="fleet-grid">
            <div className="fleet-card fleet-card--escalade">
              <div className="fleet-img">
                <img
                  src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Fleet_Escalade_three-quarter_front_angle_parked_p_5b470443-6da5-4401-9419-40bced2e72aa_1_sncof5.png"
                  alt="Cadillac Escalade ESV"
                />
              </div>
              <div className="fleet-placard">
                <div className="fleet-placard-name">Cadillac Escalade ESV</div>
                <div className="fleet-placard-spec">6 Passengers · Extended Wheelbase · 8 Bags</div>
              </div>
            </div>
            <div className="fleet-card fleet-card--sclass">
              <div className="fleet-img">
                <img
                  src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Fleet_Mercedes_S-Class_same_angle_as_Escalade_cit_aa92305e-d11e-436f-802b-a2b796a3eaef_3_rajvfv.png"
                  alt="Mercedes S-Class"
                />
              </div>
              <div className="fleet-placard">
                <div className="fleet-placard-name">Mercedes S-Class</div>
                <div className="fleet-placard-spec">3 Passengers · Flagship Sedan · 3 Bags</div>
              </div>
            </div>
            <div className="fleet-card fleet-card--suburban">
              <div className="fleet-img">
                <img
                  src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Fleet_Suburban_MB_s_class_Sprinter_can_be_simple__4b35bdf6-ec99-49dc-a01e-80cfe2183ad1_0_nzqbls.png"
                  alt="Chevrolet Suburban"
                />
              </div>
              <div className="fleet-placard">
                <div className="fleet-placard-name">Chevrolet Suburban</div>
                <div className="fleet-placard-spec">6 Passengers · 6 Bags</div>
              </div>
            </div>
            <div className="fleet-card fleet-card--limo">
              <div className="fleet-img">
                <img
                  src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Fleet_Suburban_MB_s_class_Sprinter_can_be_simple__4b35bdf6-ec99-49dc-a01e-80cfe2183ad1_0_nzqbls.png"
                  alt="Stretch Limousine"
                />
              </div>
              <div className="fleet-placard">
                <div className="fleet-placard-name">Stretch Limousine</div>
                <div className="fleet-placard-spec">Up to 10 Passengers · Events &amp; Groups</div>
              </div>
            </div>
            <div className="fleet-card fleet-card--sprinter">
              <div className="fleet-img">
                <img
                  src="https://res.cloudinary.com/dotg7k9gy/image/upload/u3198426991_Fleet_Suburban_MB_s_class_Sprinter_can_be_simple__4b35bdf6-ec99-49dc-a01e-80cfe2183ad1_0_nzqbls.png"
                  alt="Mercedes Sprinter"
                />
              </div>
              <div className="fleet-placard">
                <div className="fleet-placard-name">Mercedes Sprinter</div>
                <div className="fleet-placard-spec">Up to 14 Passengers · Group &amp; Event</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — TESTIMONIALS */}
        <section id="testimonials">
          <div className="testimonials-inner">
            <div className="quote-mark">"</div>
            <blockquote className="hero-quote">
              Three years, every pickup early. We have never had to think about the car.
            </blockquote>
            <p className="hero-quote-attr">Chief of Staff, Family Office</p>
            <div className="secondary-quotes">
              <div>
                <p className="secondary-quote-text">Discretion is not something you can train in a week. Leforse understands that our movements are confidential by default. In four years, not a word out of place. Not a schedule disclosed. That is genuinely rare.</p>
                <span className="label secondary-quote-attr">— Family Office Principal</span>
              </div>
              <div>
                <p className="secondary-quote-text">We run a touring production with 14 stops and no margin. Leforse has never missed a call time — not once. They confirm the night before, they're there when the doors open, and they don't make us manage them. That's the whole job.</p>
                <span className="label secondary-quote-attr">— Touring Production Manager</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — PRICING */}
        <section id="pricing">
          <h2 className="section-headline">Published Rates. No Surge. Ever.</h2>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Rate</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Service">
                    <div className="tier-name">Hourly Executive</div>
                    <div className="tier-note">3-hour minimum</div>
                  </td>
                  <td data-label="Rate">
                    <div className="tier-rate">$150 / hr</div>
                    <span className="tier-rate-note">Sedan · From</span>
                  </td>
                  <td data-label="Details">
                    <div className="tier-detail">Sedan and SUV hourly rates available. Minimum hours apply per vehicle class. Gratuity, tolls, and parking billed at cost. Waiting time included in hourly block.</div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Service">
                    <div className="tier-name">Point-to-Point Airport — Flat</div>
                    <div className="tier-note">JFK · LGA · EWR · Teterboro</div>
                  </td>
                  <td data-label="Rate">
                    <div className="tier-rate">Flat Rate</div>
                    <span className="tier-rate-note">No surge, ever</span>
                  </td>
                  <td data-label="Details">
                    <div className="tier-detail">Published flat rates to and from all four metro airports. Flight tracked — your clock doesn't start until wheels down. Rate is fixed at booking. Call the desk for current airport schedules.</div>
                  </td>
                </tr>
                <tr>
                  <td data-label="Service">
                    <div className="tier-name">Secure Detail — Day Rate</div>
                    <div className="tier-note">EP-trained chauffeur</div>
                  </td>
                  <td data-label="Rate">
                    <div className="tier-rate">By Quote</div>
                    <span className="tier-rate-note">Custom scope</span>
                  </td>
                  <td data-label="Details">
                    <div className="tier-detail">Full-day secure transport engagements, advance route surveys, and EP coordination quoted individually. Armored vehicle option available. Contact the desk for a confidential consultation.</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pricing-risk-strip">
            <span className="risk-text">No Surge Pricing</span>
            <span style={{color:'rgba(201,166,83,0.3)',fontSize:'18px'}}>·</span>
            <span className="risk-text">Flat Published Rates</span>
            <span style={{color:'rgba(201,166,83,0.3)',fontSize:'18px'}}>·</span>
            <span className="risk-text">Cancel Up to 2 Hours Prior</span>
            <span style={{color:'rgba(201,166,83,0.3)',fontSize:'18px'}}>·</span>
            <span className="risk-text">All Rates Confirmed at Booking</span>
          </div>
          <div className="pricing-cta">
            <div className="cta-btn-group">
              <a href="https://book.mylimobiz.com/v4/leforseluxury" className="btn-primary">Reserve Online</a>
              <a href="tel:8335336773" className="btn-secondary" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>Call 833-533-6773</a>
            </div>
          </div>
        </section>

        {/* SECTION 8 — FINAL CTA */}
        <section id="cta">
          <div className="cta-crest">
            <svg viewBox="0 0 20 20">
              <path d="M10 2 L18 6 L18 13 C18 17 10 20 10 20 C10 20 2 17 2 13 L2 6 Z" stroke="#c9a653" strokeWidth="1" fill="none"/>
              <path d="M10 6 L14 8 L14 13 C14 16 10 18 10 18 C10 18 6 16 6 13 L6 8 Z" stroke="#c9a653" strokeWidth="0.75" fill="none"/>
            </svg>
          </div>
          <h2 className="cta-headline">Reserve the Car.<br />Forget About the Car.</h2>
          <p className="cta-sub">Discreet executive transport since 1991, across NYC and the tri-state area.</p>
          <div className="cta-actions">
            <div className="cta-btn-group">
              <a href="https://book.mylimobiz.com/v4/leforseluxury" className="btn-primary">Reserve Online</a>
              <a href="tel:8335336773" className="btn-secondary">Call 833-533-6773 (LEFORSE)</a>
            </div>
            <span className="cta-dispatch">24/7 Dispatch — <a href="tel:8335336773">833-533-6773 (LEFORSE)</a></span>
          </div>
          <p className="label cta-micro">3 Decades. Zero Disclosed Incidents. Leforse Luxury Limo.</p>
        </section>

      </main>

      <footer>
        <span className="footer-brand">Leforse Luxury Limo — Est. 1991</span>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#fleet">Fleet</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </div>
        <span className="footer-copy">&copy; 2025 Leforse Luxury Limo. NYC &amp; Tri-State.</span>
      </footer>
    </>
  )
}
