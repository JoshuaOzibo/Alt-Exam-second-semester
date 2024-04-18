import React from 'react';
import {Button} from 'react-aria-components';

const PaginationPage = ({totalRepos, repoPerPage, setCurrentPage, currentPage}) => {
    const repoNumber = [];

    for(let i = 1; i <= Math.ceil(totalRepos / repoPerPage); i++){
        repoNumber.push(i);
    }
  return (
    <div className=' w-full bg-yellow-300 flex items-center justify-center mt-[96px] space-x-5'>
      {repoNumber.map((repo, repoIndex) => {

        return <Button key={repoIndex} className={repo == currentPage ? 'bg-slate-400 border-[3px] rounded-lg px-[20px] h-[50px] outline-none text-[20px]': 'bg-gray-50 px-[20px] outline-none border-[3px] rounded-lg h-[50px] text-[20px]'} onPress={() => setCurrentPage(repo)}>{repo}</Button>
      })}
    </div>
  )
}

export default PaginationPage;
