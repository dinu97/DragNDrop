const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

//create loop for lists
for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i]; //current item list items

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	//create loop for lists
	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		//during the time you are dragging something until you drop it.
		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		//at the moment you drag in to the target element
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		//drags the cursor out of the control or the user cancels the current drag-and-drop operation.
		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		//element or text selection is dropped on a valid drop target.
		list.addEventListener('drop', function (e) {
			console.log('drop');
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}