import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
        <div style={{display:"flex", width:"100%"}}>
            <div style={{margin:"0 2.5rem 0 0"}}>
                <h3 style={{marginBottom:"0.5rem"}}>Quick Links</h3>
                <Link className="text-[#3e2f1c] link" to="/about">About Us</Link>
                <Link className="text-[#3e2f1c] link" to="/products">Products</Link>
                <Link className="text-[#3e2f1c] link" to="/outReach">Out reach programs</Link>
            </div>
            <div
            style={{
                margin: "0px 2.5rem",
            }}
            >
                <h3 style={{ marginBottom: "0.5rem" }}>Products</h3>
                <div
                    style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0rem 3rem"
                    }}
                >
                    <Link className="text-[#3e2f1c] link" to="/products">Ghee</Link>
                    <Link className="text-[#3e2f1c] link" to="/products">Milk</Link>
                    <Link className="text-[#3e2f1c] link" to="/products">Cheese</Link>
                    <Link className="text-[#3e2f1c] link" to="/products">Butter</Link>
                    <Link className="text-[#3e2f1c] link" to="/products">Paneer</Link>
                </div>
            </div>
            
            <div style={{marginLeft:"auto",}}>
                <h3  style={{marginBottom: "0.5rem"}}>Get in touch</h3>
                <p>Email: emailid@emailid.com</p>
                <p>Ph no: +91 7708636977</p>
            </div>
        </div>
        <br/><br/>
        <div style={{display:'flex', justifyContent:"space-between", width: "100%"}}>
            <p>© {new Date().getFullYear()} Pavya. All Rights reserved.</p>
            <a href="www.google.com">Terms and Conditions</a>
        </div>

    </div>
  );
}