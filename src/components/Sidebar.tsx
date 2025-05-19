import React from 'react'
interface Product{
    category: string;
}

interface FetchResponse {
    products: Product[];
    
}
const Sidebar = () => {
    const [categories, setCategories] = React.useState<string[]>([])
    const [keywords] = React.useState<string[]>([
        'React',
        'JavaScript',
        'CSS',
        'HTML',
        'Node.js',
        'Express',
        'MongoDB',
        'Python',
        'Django',
        'Flask',
        'Ruby on Rails',
        'Java',
        'Spring Boot',
        'PHP',
        'Laravel',
    ])

   React.useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data:FetchResponse = await response.json()
                setCategories(data)
                
            } catch (error) {
                console.error('Error fetching categories:', error)
            }

  return Sidebar
}

export default Sidebar
