import { OptionsOrGroups } from "react-select";
import Select, { MultiValue } from 'react-select'

const PortfolioFilter = ({options, onChange, placeholder }: {options: OptionsOrGroups<any, any>, onChange: ((newValue: MultiValue<any>) => void), placeholder: string}) => {
    return <Select 
    options={options}
    isMulti
    name="colors"
    styles={{
        option: (baseStyles) => ({
            ...baseStyles,
            color: 'black'
          }),
    }}
    className="basic-multi-select"
    classNamePrefix="select"
    onChange={onChange}
    placeholder={placeholder}
/>
}

export default PortfolioFilter;