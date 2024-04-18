import React, { useEffect, useState } from 'react';

import {fetchData} from '../Components/DataFetch';
import RepositoriesItem from './RepositoriesItem';
import PaginationPage from './PaginationPage';
import Search from './Search';
import Filter from './Filter';

const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(4)
    const [searchItem, setSearchItem] = useState('');
 
    useEffect(() => {
        const fetchDataFromGitHub = async () => {
          try {
            const data = await fetchData();
            const DataItem = data.map((item) => {
                return {
                    name: item.name,
                }
            });

            setRepos(DataItem)
          } catch (error){
            console.error('Error fetching data:', error);
          }
        };
    
        fetchDataFromGitHub();
      }, []);

      // Apply filtering based on search input
      const filteredRepos = repos.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );

         // Pagination logic
      const lastPostIndex = currentPage * postPerPage;
      const firstPostIndex = lastPostIndex - postPerPage;
      const currentPost = filteredRepos.slice(firstPostIndex, lastPostIndex);

        console.log(currentPost)
        console.log(searchItem)

  return (
    <div className='w-full bg-red-500 md:px-[80px] px-[1rem]'>

        <main className='flex items-center justify-between w-full bg-orange-500 py-[30px]'>
        <Search searchItem={searchItem} setSearch={setSearchItem} />
        <Filter />
        </main>


      <div className='bg-gray-500 grid grid-cols-2 gap-3'>
        {repos.length === 0 ? <p>Loading...</p> : currentPost.map((OneRepo) => <RepositoriesItem key={OneRepo.name} repoText={OneRepo.name} />)}
      </div>

      <PaginationPage totalRepos={repos.length} repoPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default Repositories
