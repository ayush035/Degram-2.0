import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";

export default function Navbar() {

    const MyComponent = () => {
        const { address, isConnecting, isDisconnected } = useAccount();
        if (isConnecting) return <div>Connecting...</div>;
        if (isDisconnected) return <div>Disconnected</div>;
        return <div>Connected Wallet: {address}</div>;
      };

    return (
        
            <>
            <nav className=' flex justify-between h-12 text-white bg-black   font-bold' >
                <span className='mx-20 my-2 flex text-white text-2xl  '><Link href={"/"}>Degram 2.0</Link></span>
                <ul className= 'px-2 py-3 flex space-x-10 mx-12 '>

        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/explore">Explore</Link></div>
        <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/search">Search</Link></div>

            <div className='hover:text-white delay-50  text-md font-semibold font-mono'>
        
            <Link href="/post">Post</Link></div>

        <div className='hover:text-white delay-50 text-md font-semibold font-mono '>
        
            <Link href="/profile">Profile</Link></div>
              {/* <div className=' mx-2 my-2 '> */}   
              <div className='hover:text-white delay-50 text-lg font-semibold font-mono '>
        
</div>                 
<ConnectKitButton />

            </ul>
        </nav>
        {/* <hr/> */}
        </>
        
        );
        }