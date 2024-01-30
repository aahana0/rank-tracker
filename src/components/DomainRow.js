import Link from "next/link";

export default function DomainRow({ owner, domain, icon, keywords }) {
  return (
    <div className='flex gap-2 bg-white border border-blue-300 border-b-4 p-4 rounded-lg items-center my-3 '>
      {icon && <img src={icon} className='h-12' />}

          <div>
              <Link href={'/domains/'+domain} className='font-bold text-xl leading-5 block'>{ domain}</Link>
       
        {keywords.map((keywordDoc) => (
          <>
            <Link href={'/domains/'+domain+'/'+keywordDoc.keyword} className='text-xs text-gray-500 bg-slate-100 rounded-md p-1 mt-1 inline-block '>{keywordDoc.keyword}</Link>{' '}
          </>
        ))}
      </div>
      <div className='bg-green-100 w-36 h-[64px]'></div>
    </div>
  );
}
