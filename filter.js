var minValue = 500;

var all_notes = document.getElementsByClassName(
	'note relative bg-background bg-center items-center select-none w-56 sm:w-64 pb-4 row-gap-1'
);

var i;
for (i = 0; i < all_notes.length; i++) {
    try {
        var bell_row = null;
        for (var j = 0; j < all_notes[i].childNodes.length; j++) {
            if (all_notes[i].childNodes[j].className == 'p-4 self-start flex flex-row items-center') {
                bell_row = all_notes[i].childNodes[j];
                break;
            }
        }
        var bell_column = null;
        for (var k = 0; k < bell_row.childNodes.length; k++) {
            if (bell_row.childNodes[k].className == 'flex flex-row items-center justify-self-center') {
                bell_column = bell_row.childNodes[k];
            }
        }
        var bell_span = null;
        for (var l = 0; l < bell_column.childNodes.length; l++) {
            if (bell_column.childNodes[l].className == 'ml-2') {
                bell_span = bell_column.childNodes[l];
            }
        }
        bell_price = parseInt(bell_span.innerHTML);
        if (bell_price <= minValue) {
            all_notes[i].style.display = 'none';
        }
    }
    catch{

        all_notes[i].style.display = 'none';
    }
}
