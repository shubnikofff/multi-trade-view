## Task description

The web app shown on the image is a three column layout and in its functionality, it's similar to intercom or webmail application. This single page application should be built on with React with TypeScript. 

Regarding the design, you are not required to follow it completely, but make sure the outcome looks nice.
						
Most importantly, think about smaller screen sizes and usability on them, as that is where most of the traffic comes from.

### Guidance:

1.	On the left side, you have all the items (we call them trades). One item should contain key information about trade: buyer username, payment method, amount, trade status (Not Paid/Paid) and if there has been new messages displayed as a green/grey dot on the left side.

2.	Selecting a trade should load the chat with user and trade information.

3.	The message dot should turn grey once the chat is loaded and the unseen message becomes visible for the user.

4.	When selecting a trade item, the route should change and when reloading the page it should select the corresponding trade.

5.	In the middle, you have private trade chat.

6.	On top of it you have the payment method name again and the buyer's username with a positive and negative reputation.

7.	The messages are listed so that your messages are with the user image on the left and the buyer messages with user image on the right.

8.	In the bottom, you have the message sending component.

9.	When clicking on the delete icon on the top, the trade should be deleted from the list. 
	
10.	You should be able to switch the chat from buyer to seller so that I can write as a buyer or as a seller. (you can just add a button somewhere where you can click either buyer/seller to switch).

11.	You should be able to send messages to the trade chat. When sending messages to the trade chat as a buyer, the seller (the one using multi-trade view) should see this trade message notification dot turn green.

12.	On the right side, there is not much happening except for showing the trade information. There is a "Release bitcoins" button for when the other user has marked the trade paid.

### Tips:

- Use Redux for managing state.
- All initial data should be hardcoded and any backend is not required. 
- All real-time information just pulled with timeout events randomly https://api.coindesk.com/v1/bpi/currentprice/USD.json
