import React from 'react'

const RepositoriesItem = ({repoText}) => {
  return (
    <div className='border h-[100px]'>
      <div>
        {repoText}
      </div>
    </div>
  )
}

export default RepositoriesItem
