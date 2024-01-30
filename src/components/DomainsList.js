'use client';
import DomainRow from "./DomainRow";
import DoubleHeader from "./DoubleHeader";

export default function DomainsList({domains,keywords}) {
    
  return (
    <div>
      <DoubleHeader preTitle={'your domains'} mainTitle={domains.length + ' domains'} />
      {domains.map((domainDoc) => (
        <DomainRow {...domainDoc} keywords={keywords.filter(k => k.domain===domainDoc.domain)} />
      ))}
    </div>
  );
}
