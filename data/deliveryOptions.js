import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0    
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499    
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999    
}]

export function getDeliveryOption(deliveryOptionId)
{
    let deliveryOption;
    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId)
        {
            deliveryOption = option;
        }
    })

    return deliveryOption || deliveryOptions[0];

}

export function calculateDeliveryDate(deliveryOption)
{
    // const today = dayjs();
    
    // const deliveyDate  = today.add(deliveryOption.deliveryDays, 'day');
    // const dateString = deliveyDate.format('dddd, MMMM DD');
    
    // return dateString;
    let remainingDays = deliveryOption.deliveryDays;
    let deliveryDate = dayjs();

    while (remainingDays > 0) {
        deliveryDate = deliveryDate.add(1, 'day');
        console.log(deliveryDate, 'deliveryDate');
        console.log(remainingDays, 'remainingDays');
        

        if (!isWeekend(deliveryDate)) {
        remainingDays--;
        // This is a shortcut for:
        // remainingDays = remainingDays - 1;
        }
    }

     const dateString = deliveryDate.format(
        'dddd, MMMM D'
    );

    return dateString;
}

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}
