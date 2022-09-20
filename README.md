# Hadits-Classfication-using-BERT
Hadits Classfication using BERT - IndoNLU

## Deskripsi
Hadits merupakan sumber hukum kedua umat islam. Dengan sekian banyaknya hadits yang tercatat, para perawi sudah mengklasifikasikan hadits-hadits tersebut dengan metode penyusunan yang berbeda pada setiap kitab mereka. Kitab Shahih Bukhari memiliki jumlah bab paling banyak dari 8 kitab hadits sunni lainnya. Oleh karena itu, terdapat judul bab yang tercantum pada kitab hadits Bukhari namun tidak tercantum pada kitab hadits lainnya. 
Untuk menemukan hadits yang sesuai dengan bab yang tidak tercantum tersebut pada suatu kitab hadits, penulis menggunakan salah satu teknik pada text mining, yaitu text classification. Beberapa metode yang bisa digunakan untuk melakukan text classification adalah Naive Bayes (1761), SVM (1992), RNN (1986), CNN (1998), Information Retrieval (1979), dan yang paling terbaru dalam pendekatan neural network adalah BERT (2018). Bidirectional Encoder Representations from Transformers atau BERT merupakan teknologi paling mutakhir saat penelitian ini dilakukan. BERT memiliki kecepatan dan keakuratan yang lebih tinggi dari metode neural network lainnya. Pada penelitian ini, dilakukan training menggunakan 3 metode, yaitu SVM, Naive Bayes, dan BERT terhadap dataset kitab hadits Bukhari. Training ini bertujuan agar model yang dihasilkan dapat mengklasifikasikan input hadits dari kitab hadits lain sebagai salah satu dari bab kitab hadits Bukhari. 
Dengan demikian, setiap hadits dari kitab hadits lain akan memiliki bab klasifikasi baru sesuai bab kitab hadits Bukhari dan memberikan pengetahuan baru bahwa suatu hadits akan masuk kedalam bab spesifik yang tidak ada pada kitab hadits asalnya.



