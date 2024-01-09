import IndiContainer from '../IndiContainer'
import './index.css'

const ViewsList = props => {
  const {listData} = props
  // console.log(listData)

  const listOrder = {}
  // console.log(listData.lists[0].list_number)

  for (const i of listData.lists) {
    if (listOrder[i.list_number]) {
      listOrder[i.list_number].push(i)
    } else {
      listOrder[i.list_number] = [i]
    }
  }

  // console.log(listOrder)

  const listArray = []
  for (const i in listOrder) {
    listArray.push(listOrder[i])
  }

  // // console.log(listArray)
  // console.log(listData)

  return (
    <ul className="total-items-container">
      {listArray.map((each, index) => (
        <li testid={each[0].list_number} key={index}>
          <IndiContainer index={index} array={each} />
        </li>
      ))}
    </ul>
  )
}

export default ViewsList 


// import React from 'react';

// const FailureView = () => (
//   <div>
//     <img src="path/to/failure-image.jpg" alt="failure view" />
//   </div>
// );

// const Loader = () => (
//   <div testid="loader">
//     {/* Loader content */}
//     Loading...
//   </div>
// );

// const ListContainer = ({ listData }) => (
//   <div testid={`list${listData.list_number}`} className="list-container">
//     {/* Render list items */}
//     {listData.items.map((item) => (
//       <div key={item.id}>
//         {/* Your list item content */}
//         {item.name}
//       </div>
//     ))}
//   </div>
// );

// const EmptyListContainer = ({ listsData }) => (
//   <div testid={`list${listsData.length + 1}`} className="list-container empty-list-container">
//     {/* Empty list container content */}
//     Empty List
//   </div>
// );

// const App = () => {
//   // Example data structure
//   const listsData = [
//     { list_number: 1, items: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }] },
//     // Add more list data as needed
//   ];

//   return (
//     <div>
//       <FailureView />
//       <Loader />
//       {/* Render existing list containers */}
//       {listsData.map((list) => (
//         <ListContainer key={list.list_number} listData={list} />
//       ))}
//       {/* Render new empty list container */}
//       <EmptyListContainer listsData={listsData} />
//     </div>
//   );
// };

// export default App;
 

// import React, { useState } from 'react';
// import ListCreationView from './ListCreationView';

// const CreateList = () => {
//   const [selectedLists, setSelectedLists] = useState([]);
//   const [error, setError] = useState(null);

//   const handleCreateList = () => {
//     if (selectedLists.length === 2) {
//       // Navigate to ListCreationView component
//       // You might use React Router or another navigation approach
//       // Pass selectedLists as a prop to ListCreationView
//     } else {
//       setError('You should select exactly 2 lists to create a new list.');
//     }
//   };

//   return (
//     <div>
//       {error && <div>{error}</div>}
//       {/* Render checkboxes for selecting lists */}
//       {/* Render "Create a new list" button with onClick={handleCreateList} */}
//     </div>
//   );
// };

// export default CreateList;

// // ListCreationView component
// import React from 'react';

// const ListCreationView = ({ selectedLists }) => {
//   // Implement the UI for ListCreationView
//   // Allow moving list items between selectedLists and new list container
//   // Handle Cancel and Update buttons
// };

// export default ListCreationView;
