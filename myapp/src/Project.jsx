import { useState } from "react";

const Project = () => {

    const record = [
        {
            name: 'Pizaa',
            price: '20',
            qty: 1,
            category: 'dinner',
            image : './image/img-1.jpeg',
        },
        {
            name: 'Bhaji',
            price: '15',
            qty: 1,
            category: 'dinner',
            image : './image/img-2.jpeg',
        },
        {
            name: 'Samosa',
            price: '7',
            qty: 1,
            category: 'breakfast',
            image : './image/img-3.jpeg',
        },
        {
            name: 'Panipuri',
            price: '5',
            qty: 1,
            category: 'breakfast',
            image : './image/img-4.jpeg',
        },
        {
            name: 'Batekapava',
            price: '9',
            qty: 1,
            category: 'breakfast',
            image : './image/img-5.jpeg',
        },
        {
            name: 'Bhat',
            price: '10',
            qty: 1,
            category: 'lunch',
            image : './image/img-6.jpeg',
        },
        {
            name: 'Rotali',
            price: '20',
            qty: 1,
            category: 'lunch',
            image : './image/img-7.jpeg',
        },
        {
            name: 'Lassi',
            price: '11',
            qty: 1,
            category: 'lunch',
            image : './image/img-8.jpeg',
        },
        {
            name: 'Dhosa',
            price: '20',
            qty: 1,
            category: 'dinner',
            image : './image/img-9.jpeg',
        },
    ];

    const [username, setUsername] = useState(null);

    const btn = (category) => {
        setUsername(category);
    };

    const menu = username
        ? record.filter(item => item.category === username)
        : record;

    return (
        <div  className="back">
            <div className="btn">
            <button onClick={() => btn('lunch')}>Lunch</button>
            <button onClick={() => btn('dinner')}>Dinner</button>
            <button onClick={() => btn('breakfast')}>Breakfast</button>
            <button onClick={() => btn(null)}>Show All</button>
            </div>

                    {
                         <div>
                            <div className="menu-cards">
                         {menu.map((val, index) => (
                           <div key={index} className="menu-card">
                             <img src={val.image} alt={val.name} />
                             <h3>{val.name}</h3>
                             <p>Price: {val.price}$</p>
                             <button>order now</button>
                           </div>
                         ))}
                       </div>
                         </div>
                    }
                    
                
        </div>
    )

}
export default Project;

// import React, { useState } from 'react';

// const Menu = () => {
//   // Assume your menu data is stored as an array of objects
//   const menuData = [
//     {
//       name: "Item 1",
//       price: 10,
//       image: "item1.jpg", // Replace with actual image URLs or paths
//       category: "Starter"
//     },
//     {
//       name: "Item 2",
//       price: 15,
//       image: "item2.jpg",
//       category: "Main Coue"
//     },
//     {
//       name: "Item 3",
//       price: 5,
//       image: "item3.jpg",
//       category: "Dessert"
//     },
//     // Add more items as needed
//   ];

//   // State to hold the selected category
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Function to filter menu items by category
//   const filterMenuByCategory = (category) => {
//     setSelectedCategory(category);
//   };

//   // Filter menu items based on the selected category
//   const filteredMenuItems = selectedCategory
//     ? menuData.filter(item => item.category === selectedCategory)
//     : menuData;

//   return (
//     <div>
//       <div>
//         {/* Category buttons */}
//         <button onClick={() => filterMenuByCategory("Starter")}>Starter</button>
//         <button onClick={() => filterMenuByCategory("Main Coue")}>Main Coue</button>
//         <button onClick={() => filterMenuByCategory("Dessert")}>Dessert</button>
//         {/* Add more buttons for other categories */}
//         <button onClick={() => filterMenuByCategory(null)}>Show All</button>
//       </div>
//       <div>
//         {/* Display filtered menu items in cards */}
//         <div className="menu-cards">
//           {filteredMenuItems.map((item, index) => (
//             <div key={index} className="menu-card">
//               <img src={item.image} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
