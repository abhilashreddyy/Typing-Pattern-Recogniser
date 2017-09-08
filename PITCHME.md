# Typing authenticator

---
## what is our project about ???

+++
* evey one has a unique typing pattern (agreed !!!)
* typing pattern refers to time gap between typing two consecutive letters
* this application can be used for authentication
* main motive is to recognise patterns using machine learning

---
### Technologies used
* languages
  * web Languages (HTML,CSS,JAVASCRIPT)
  * Python
  * Node (Server language)

* Machine learning algorithm
  * K Nearest Neighbours (will discus about this in furthur slides)

---

### How does our application work
* Initially a webpage taking input from user 
* Sending http request to server 
  * Post request including pattern collected from user 
* Now server execute a call back function 
   * now python code is executed trough terminal
   * Runs machine learning model on data collected from user
+++

* output generate is pushed into buffer stream 
* Collected by call back at server side 
* response is sent sent to webpage to display the predicted name of user

+++

<img src="https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjal5rvi5XWAhUCzmMKHaFJDZIQjRwIBw&url=https%3A%2F%2Fdatasciencelab.wordpress.com%2F2013%2F12%2F27%2Ffinding-the-k-in-k-means-clustering%2F&psig=AFQjCNFd_URQtFngrkmyVoLCUmVRRO8pVQ&ust=1504943015134256" alt="Sync Request" style="width: 800px; height: 350;"/>




