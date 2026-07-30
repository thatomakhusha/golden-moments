import Link from "next/link";

const CTA = () => {
    return ( 
        <section className="bg-brown py-25 mt-20">
            <div className="flex flex-col items-center justify-center gap-4">
                
                <p className="text-white font-display text-[2.7rem] italic">Let's Create Your Golden Moment</p>
                <p className="text-ivory font-light mb-5">Share your vision with us, and let's design something unforgettable together.</p>
                <Link
                    href="/order"
                    className="
                        hidden
                        rounded-full
                        border
                        border-white
                        px-6
                        py-3
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.25em]
                        text-white
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-brown
                        lg:block
                    "
                >
                        Start your order
                </Link>

            </div>
        </section>
     );
}
 
export default CTA;