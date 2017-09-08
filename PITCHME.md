# Typing authenticator

---
## what is our project about ???

+++
* Every one has a unique typing pattern (AGREED !!!)
* Typing pattern refers to time gap between typing two consecutive letters.
* This application can be used for authentication.
* Main motive is to recognise patterns using machine learning.

---
### Technologies used
* Languages
  * Web Languages (HTML,CSS,JAVASCRIPT)
  * Python
  * Node (Server language)

* Machine learning algorithm
  * K Nearest Neighbours (will discuss about this in furthur slides)

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


<img src="/images/Clusterplot.png" style="width: 600px; height: 800;" />

---
### Advantages
* Recognize people with their typing pattern.
* Authenticate logins with typing pattern.
* Very less space is required.


---
### Disadvantages
* Data needs to be updated after regular intervals.
* Person can voluntarily change his typing pattern.
* Accuracy is not very high in longer run. 

---
# Thank You
