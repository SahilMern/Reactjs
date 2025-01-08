const ParentComponent = () => {
    const childElement = React.createElement('div', { className: 'child' }, 'Child Element');
    
    // Parent element ko clone karte hain aur naye props pass karte hain
    const updatedChild = React.cloneElement(childElement, { className: 'updated-child' });
  
    return React.createElement('div', null, updatedChild);
  };
  