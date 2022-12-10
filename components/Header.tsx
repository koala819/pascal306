import Navbar from './Navbar';

export default function Header (props: any){
    return (
    <div className="fixed w-full  inset-x-0 top-0 z-50">
        <Navbar bgColor={props} />

    </div>
    ) 
}
