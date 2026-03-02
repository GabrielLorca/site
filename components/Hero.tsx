import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section">
      <h1>FRAKTAL</h1>
      <span className="logo-large">
        <Image src="/fraktal-logo-large.svg" width={800} height={400} alt="" />
      </span>
      <div>
        <h2>Fractional NFT</h2>
        <Image src="/single-leaf.svg" width={55} height={55} alt="" />
        <h2>Protocol</h2>
      </div>

      <div>
        <h2>Governed by a DAO</h2>
      </div>

      <div className="join">
        <div>
          <Link href="https://twitter.com/FraktalNFT">
            <a>
              <Image
                src="/Twitter/Original.svg"
                width={37}
                height={37}
                alt=""
              />
            </a>
          </Link>
          <Link href="https://discord.com/invite/P6fCPvtZtq">
            <a>
              <Image
                src="/Discord/Original.svg"
                width={37}
                height={37}
                alt=""
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
