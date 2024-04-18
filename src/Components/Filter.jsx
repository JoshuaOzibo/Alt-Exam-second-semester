import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue
} from 'react-aria-components';

const Filter = ({filterDate}) => {
  return (
    <select className='w-[48%] h-[50px] outline-none rounded-md px-[10px] cursor-pointer' onChange={filterDate}>
      <option>Filter Repos by year</option>
      <option value={''}>Aardvark</option>
      
      <option value={''}>Cat</option>
      <option value={''}>Dog</option>
      <option value={''}>Kangaroo</option>
      <option value={''}>Panda</option>
      <option value={''}>Snake</option>
    </select>
  )
}

export default Filter
