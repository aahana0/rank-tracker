'use client';
import DomainRow from "./DomainRow";
import DoubleHeader from "./DoubleHeader";

export default function DomainsList({domains}) {
    
  return (
    <div>
      <DoubleHeader preTitle={'your domains'} mainTitle={domains.length + ' domains'} />
      {domains.map((domain) => (
          <DomainRow {...domain} />
      ))}
    </div>
  );
}
