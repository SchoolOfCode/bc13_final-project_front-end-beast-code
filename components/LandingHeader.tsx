import Link from "next/link"
export default function LandingHeader(){
    return <div>
        <div data-testid="logo"><Link href="/">Logo</Link></div>
        <a href="#" data-testid="about-us">About us</a>
        <a href="#" data-testid="login">Login</a>
    </div>
}
