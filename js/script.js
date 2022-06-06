const generateButton = document.getElementById('ticket-generator');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;

        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
            document.getElementById('ticket-offer').innerHTML = 'Sconto minorenni';
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
            document.getElementById('ticket-offer').innerHTML = 'Sconto Over 65';
        } else {
            document.getElementById('ticket-offer').innerHTML = 'Tariffa standard';
        }
        
        const finalPrice = price - discount;

        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-carriage').innerHTML = Math.floor(Math.random() * 10);
        document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * 10000);
        document.getElementById('ticket-price').innerHTML = '€ ' + finalPrice.toFixed(2);
        document.getElementById('container').classList.add('active');
    }
)

const deleteAction = document.getElementById('undo');
deleteAction.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value = '';
        const userKm = parseInt( document.getElementById('user-km').value = '' );
        const userAge = document.getElementById('user-age').value = 'maggiorenne';
        document.getElementById('container').classList.remove('active');
    }
)