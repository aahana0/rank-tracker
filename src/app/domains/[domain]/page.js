'use client';
import DoubleHeader from '@/components/DoubleHeader';
import NewKeywordForm from '@/components/NewKeywordForm';
import axios from 'axios';
import { useEffect, useState } from 'react';
import KeywordRow from '@/components/KeywordRow';
import DeleteButton from '@/components/DeleteButton';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/navigation';

const MySwal = withReactContent(Swal);

export default function DomainPage(props) {
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const domain = props.params.domain;
  const router = useRouter();
  useEffect(() => {
    fetchKeywords();
  }, []);
  function fetchKeywords() {
    setLoading(true);
    axios.get('/api/keywords?domain=' + domain).then((response) => {
      setKeywords(response.data);
      setLoading(false);
    });
  }
  function deleteDomain() {
    axios.delete('/api/domains?domain=' + domain).then(() => {
      router.push('/');
    });
  }

  function showDeletePopup() {
    MySwal.fire({
      title: 'Delete',
      text: `Do you want to delete ${domain}?`,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f00',
      showCloseButton:true,
      showCancelButton: true,
      reverseButtons: true,
      focusCancel: true,
      focusConfirm: false,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDomain()
      }
    });
  }

  return (
    <div>
      <div className='flex items-end'>
        <DoubleHeader preTitle={'domains'} preTitleLink={'/'} mainTitle={domain} />
        <div className='p-2'>
          <DeleteButton onClick={showDeletePopup} />
        </div>
      </div>

      <NewKeywordForm domain={domain} onNew={fetchKeywords} />
      {loading && <div>loading...</div>}
      {!loading && keywords.map((keyword) => <KeywordRow {...keyword} />)}
      {!loading && !keywords?.length && (
        <div>No keywords found...</div>
      )}
    </div>
  );
}
