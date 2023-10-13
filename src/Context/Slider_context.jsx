/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import useSlider from '../hooks/useSlider';


const SliderContext = createContext()
const SliderProvider = ({ children }) => {
    return <SliderContext.Provider value={useSlider()}>{children}</SliderContext.Provider>

}
const useSliderContext = () => {
    return useContext(SliderContext)
}



export { SliderProvider, useSliderContext }