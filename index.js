const options = document.querySelectorAll('.option');

document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');
  
    options.forEach(option => {
      const units = parseInt(option.getAttribute('data-units'));
      
      const selectorsContainer = option.querySelector('.selectors-container');
      
      const sizeColumn = document.createElement('div');
      sizeColumn.classList.add('size-column');
      const colorColumn = document.createElement('div');
      colorColumn.classList.add('color-column');
      
      selectorsContainer.appendChild(sizeColumn);
      selectorsContainer.appendChild(colorColumn);
  
      const sizeLabel = document.createElement('label');
      sizeLabel.textContent = 'Size:';
      sizeColumn.appendChild(sizeLabel);
  
      const colorLabel = document.createElement('label');
      colorLabel.textContent = 'Color:';
      colorColumn.appendChild(colorLabel);
  
      for (let i = 0; i < units; i++) {
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
    options.forEach(opt =>{ opt.classList.remove('expanded');
    opt.querySelector('input[type="radio"]').checked = false; 
    }
  );

    option.classList.add('expanded');
    option.querySelector('input[type="radio"]').checked = true;
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

