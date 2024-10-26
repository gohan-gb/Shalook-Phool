import React from 'react'
import HeroSection from './HeroSection'
import CategorySection from './CategorySection'
import FeatureProducts from './FeatureProducts'
import { productData } from '../../../data/productData'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <FeatureProducts title={`Our featured products`} data={productData} />
        <CategorySection />
        <FeatureProducts title={`Discounted products`} data={productData} />
        <CategorySection />
        <FeatureProducts title={`Latest products`} data={productData} />
    </div>
  )
}

export default Home