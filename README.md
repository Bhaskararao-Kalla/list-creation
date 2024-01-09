### Project Description

In this project, you are going to build a **List Creation** Application.

### User stories
- When the page is opened, Users should be able to see the loader
  - The loader has to be displayed while making the HTTP request to the **List Creation API URL**.
- When the HTTP GET request is successful, Users should be able to see the list items
  - The list items should be displayed in their respective list containers based on the list_number received from the response.
- When the HTTP GET request is unsuccessful, Users should be able to see the Failure View
  - In the **[Failure View](https://assets.ccbp.in/frontend/content/react-js/list-creation-failure-lg-output.png)**, Users should be able to click the Try Again button, When clicked,
    - an HTTP GET request should be made to the **List Creation API URL**.
- Users should be able to click the Create a new list button in the success view,
    
    ![https://assets.ccbp.in/frontend/content/react-js/list-creation-lg-output.png](https://assets.ccbp.in/frontend/content/react-js/list-creation-lg-output.png)
    
  - When exactly two list containers are not checked and clicked the **Create a new list** button, then the **[Error View](https://assets.ccbp.in/frontend/content/react-js/list-creation-error-lg-output.png)** should be displayed
  - When exactly two list containers are checked and clicked the **Create a new list** button,
    - **[List Creation](https://assets.ccbp.in/frontend/content/react-js/list-creation-create-a-new-list-lg-output.png)** view should be displayed
    - In the `List Creation` view, a new empty list container should be displayed in between the two checked list containers.
    - When the right arrow image of the list item in the first list container is clicked, then the respective list item should be moved to the new list container.
    - When the left arrow image of the list item in the second list container is clicked, then the respective list item should be moved to the new list container.
    - When the right arrow image of the list item in the new list container is clicked, then the respective list item should be moved to the second list container.
    - When the left arrow image of the list item in the new list container is clicked, then the respective list item should be moved to the first list container.
            
    ![https://assets.ccbp.in/frontend/content/react-js/list-creation-update-a-new-list-lg-output.png](https://assets.ccbp.in/frontend/content/react-js/list-creation-update-a-new-list-lg-output.png)
            
    - When the **Cancel** button is clicked in the `List Creation` view, then all the changes should be cancelled and the `All Lists` view should be displayed.
    - When the **Create a new list** button is clicked in the `List Creation` view, then the **[All Lists](https://assets.ccbp.in/frontend/content/react-js/list-creation-add-a-new-list-lg-output.png)** view should be displayed with the updated list containers.

<details>

<summary>API Requests & Responses</summary>
<br/>

**List Creation API**

#### URL: `https://apis.ccbp.in/list-creation/lists`

#### Method: `GET`

#### Description:

Returns a response containing the list of list items

#### Response

```json
{
  "lists": [
    {
      "list_number": 1,
      "id": "02b72a7c-a683-11ec-b909-0242ac120002",
      "name": "Cat, european wild",
      "description": "Felis silvestris lybica"
    },
    {
      "list_number": 2,
      "id": "02b72cd4-a683-11ec-b909-0242ac120002",
      "name": "African lion",
      "description": "Panthera leo",
    },
    ...
  ],
}
```

</details>

### Project set-up instructions

<details>
<summary>To start the development process, follow the below steps</summary>
<br/>

1. Download [Node](https://nodejs.org/en/download/) on your local system - Windows OS, Linux/Mac OS
2. Download the [zip file](https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/react-js/coding-practices/listCreation/listCreation-V2.zip).
3. Unzip the zip file on your local machine.
4. Run the command "npm install" in the terminal to install all the necessary dependencies.
5. Run the command "npm start" in the terminal to start the development server.
6. The app can be viewed in the browser by using the LOCAL URL [http://localhost:3000/](http://localhost:3000/).
7. You can start the development process by going through the **README** in the given file.
8. Don’t use any third-party packages.

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- Use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported. Test cases won't be passed if styled components are used.
- The Failure View image should consist of an alt attribute value as `failure view`
- Wrap the `Loader` component with an HTML container element and add the `testid` attribute value as **loader** to it

```jsx
<div className="loader-container" testid="loader">
  <Loader type="TailSpin" color="#3b82f6" height={50} width={50} />
</div>
```

- The checkbox input `id` and label `htmlFor` attribute values should be unique for every list container.
- List containers which consist of list items should contain the testid with value as `list{list_number}`. Here the `list_number` is the value of the key `list_number` received in the response.
- A new empty list container should contain the testid with value as `list{listsData.length + 1}`. Here the `listsData` is the variable which contains all the list containers.
- Refer to the below example for the usage of `testid` in the HTML elements.
  - Example: `<li testid="list1" className="list-container"/>`.
- Responsiveness is not required.
- There is no need to use routes.

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-left-arrow.png](https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-left-arrow.png) alt should be **left arrow**

- [https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-right-arrow.png](https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-right-arrow.png) alt should be **right arrow**

- [https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-failure-img.png](https://assets.ccbp.in/frontend/react-js/list-creation/list-creation-failure-img.png) alt should be **failure view**

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #eff6ff; width: 150px; padding: 10px; color: black">Hex: #eff6ff</div>
<div style="background-color: #3b82f6; width: 150px; padding: 10px; color: white">Hex: #3b82f6</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<br/>

**Text Colors**:

<div style="background-color: #050a15; width: 150px; padding: 10px; color: white">Hex: #050a15</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #dc2626; width: 150px; padding: 10px; color: white">Hex: #dc2626</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<br/>

**Border Colors**:

<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**

### Project submission instructions:

<details>
<summary>Project Submission should contain:</summary>

- GitHub repository link to your code.
- A video link. video should contain a code walkthrough and explain your application.
  - Make at least a 5-minute video explaining your code and the features that you have implemented.
  - Upload the recorded video to your YouTube account.
  - Refer to [**this**](https://www.youtube.com/watch?v=VtF2AgFSLAw) video to get a better understanding of uploading videos to your YouTube account.
- Follow the below points
  - Standard naming conventions
  - The code must be easily understandable
  - The code must be readable
</details>