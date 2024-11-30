const options = document.querySelectorAll('.option');

document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
  
    options.forEach(option => {
      // Get the number of units (from data-units attribute)
      const units = parseInt(option.getAttribute('data-units'));
      
      // Get the container where size and color selectors will be added
      const selectorsContainer = option.querySelector('.selectors-container');
      
      // Create the columns for size and color selectors
      const sizeColumn = document.createElement('div');
      sizeColumn.classList.add('size-column');
      const colorColumn = document.createElement('div');
      colorColumn.classList.add('color-column');
      
      // Append the columns to the selectors container
      selectorsContainer.appendChild(sizeColumn);
      selectorsContainer.appendChild(colorColumn);
  
      // Create Size label and add it to the size column
      const sizeLabel = document.createElement('label');
      sizeLabel.textContent = 'Size:';
      sizeColumn.appendChild(sizeLabel);
  
      // Create Color label and add it to the color column
      const colorLabel = document.createElement('label');
      colorLabel.textContent = 'Color:';
      colorColumn.appendChild(colorLabel);
  
      // Create the size and color selectors for each unit
      for (let i = 0; i < units; i++) {
        // Create the size and color selectors for the current unit
        const sizeSelect = document.createElement('select');
        sizeSelect.innerHTML = `
          
          <option>S</option>
          <option>M</option>
          <option>L</option>
        `;
        
        const colorSelect = document.createElement('select');
        colorSelect.innerHTML = `
          
          <option>Black</option>
          <option>White</option>
        `;
        
        // Append the created selectors to the respective columns
        sizeColumn.appendChild(sizeSelect);
        colorColumn.appendChild(colorSelect);
      }
    });
  });
  


  



options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove 'expanded' class from all options
    options.forEach(opt =>{ opt.classList.remove('expanded');
    opt.querySelector('input[type="radio"]').checked = false; 
    }
  );

    // Add 'expanded' class to the clicked option
    option.classList.add('expanded');
    option.querySelector('input[type="radio"]').checked = true;
    // Update the total price dynamically
    const value = option.getAttribute('data-id');
    const totalPrice = document.querySelector('.total-price span');
    if (value === '1') {
      totalPrice.textContent = '$10.00 USD';
    } else if (value === '2') {
      totalPrice.textContent = '$18.00 USD';
    } else if (value === '3') {
      totalPrice.textContent = '$24.00 USD';
    }
  });
});

