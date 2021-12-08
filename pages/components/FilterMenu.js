



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";     

const LIST_VIEW_ICONS = ['border-all' , 'list']
const DATE_FILTERING_ICONS = ['sort-numeric-down' , 'sort-numeric-up']


const FilterMenu =({onChange,filter})=>{
     console.log('value is' + filter.view.list)
    return(

        <div className="filtering-menu mb-2">
          <FontAwesomeIcon
        className="clickable hoverable mr-3"
        size="2x"
        icon={LIST_VIEW_ICONS[filter.view.list]}
        onClick={() =>
        onChange('view', {list: +!filter.view.list})} /> 

          <FontAwesomeIcon
        className="clickable hoverable"
        size="2x"
        icon={DATE_FILTERING_ICONS[filter.datetimes.asc]}
        onClick={() =>
        onChange('datetimes', {asc: +!filter.datetimes.asc})} /> 

    </div> 
        )
}
export default FilterMenu