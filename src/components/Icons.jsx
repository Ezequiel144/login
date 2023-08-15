import { CgFacebook,CgInstagram,CgTwitter } from "react-icons/cg";
const dataIcons = [
    {
        name: 'facebook',
        icon: CgFacebook,
    },
    {
        name: 'instragram',
        icon: CgInstagram,
    },
    {
        name: 'twitter',
        icon: CgTwitter,
    }
];

export default function Icons(){
    return(
        <section className='flex justify-between items-center w-44 m-auto py-5'>
            {
                dataIcons.map((icon) => {
                    return (
                        <button className='border-2 p-2 rounded-full border-black hover:border-emerald-500'>
                            <icon.icon />
                        </button>
                        )
                })
            }
        </section>
    )
};