const options = {
    mongodb: {
        host: 'mongodb://localhost/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    firestore: {
        "type": "service_account",
        "project_id": "proyecto-coder-backend-354a1",
        "private_key_id": "a67d25ab7d51916fcdb4dba3a3d07e285a63d3da",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtYpV5PB3QuXR3\nXsUtceEbGIk36PWfGrI1z0gCzXvQa5bBPreeRS/22X1PBg+giGItwjZeQElnR9xs\nHQ3z2ISBrEemrNpzhANeZgcy9WvSjtIRILJZpTfxb1a4DDhqLlwGCmtUDSi67aO/\nV7fpRPTy6LnTStGMQ9B8CJXKyZReLPaITLQSJoByll2LOb/MvQNzMi/14MfGSP+p\nZxSjLaaK7t9Tju6JGGK4Asb42lMTKFDZ7f0qiASjgRI72VclR3fHwedkOoKuXxeX\nnD0xeom+LOPpUSNRD1Zh486nLBwmRGZL3l6XLUvzXuGssFCqaYcjAkuhlY3PsQSY\npkU0/kNzAgMBAAECggEAU8lOHjX02oakR4MemeVsOKHUvZXwDCDkeahfTitqZ792\nLJBYPz2D/i//pA5zwsnlV+OATm+WiThqxjwMIAhDkD5mqZ7iOexTjGyVkgSTRD8M\nOIaqaTO0IxIAwBP3tygMBEdIsmdhhWONO8vx7eIK1M+t7PM87CFhQG8No99huVgI\nnLgIiQ93vLUx9kP6WH9j4//AaNVwlkxIsrhRezlFCdbA1T9UMjfe300I0xSsYaUo\nIGTUBE9eSHZdlHXt1gBeBGA64qUor7skiY3vMz0VQqU+qSkU4uML/L3YDBEbJqU4\nUHqUmUkEDawHRgeP6Ijku6tRIaZxzrVVq/XpLF7cMQKBgQDmsq3eOHz/s78eSnTn\nNy+sG9KnLyYWEDcqpxccAMO8VFC/ukW//6oEvT+7ro+ZMh+v032f0Dx7Rj8e6v85\nCW72ZWakOC8Fdl2M7hiNS45cGG+347S6T2BmDZxQt2h7f45kvKNVaYtBGzS3kSqM\nlhUQ7yyDn5WI/HCH+gugblfmPQKBgQDAZrpK303lVVhuD10p9q8T9p5GJgRjA4Ry\nMJ8vwB9BPvpAi+oohsd8RDlmTtKYdbkGovk6kaOC1ZTN9sqL8i60ydJNzXxB5VjS\n10dQgUhO8/tWrr/Qnoywy7RFe62EjjL/2SdeUDNWiAqyR4FioCpiu7MlTFJoqVrN\nmrYV6I0bbwKBgQCfO4c80fqdN8DbtIK6MOIrxkyA7s83/VtGimwt/O0daYkOvRB1\ntI7ylHmQHq2pDOrIHo8gJsgIQnVA7uzYvoUjdtwAz3LNL2Tk6FZz+Em7kXZTE81j\np3QfHJffMqjgTSvIpleKlb3zY0bgyUb4IINL2/n6o8S/95XolRM/Wco79QKBgQC8\nGnMdyk303cjT6Y9y/GtVADLjcD2vs/ukTGcFnzavamvt+RyYPJUBqA3aOUvppIad\nt24k1chfnIKcDyEdS0xgkkRaroBCSIDbuX9OdOcF0cEzkSuVQb1ZB/8aQ310cDXq\nLxsvOQfIHL8gZ4pWqzJlTw8pcwHKs3BEPXKx3qc+XwKBgHFpvLEmuLpQW0pDJke+\nhhr9A9BWEek/mVaCCyScDbkl49GhzNXaJmasWMrOEeVltpkUZILDFpWTdQHMzbm+\n8F6tFy7J+0iFQjx1ezHfCgL3kYrOoAxQLzt/QfQkMZLZ/p4ntCvLjuGfD1Ghq0e6\nLKB22elyccKBFp9oSneauh2K\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-iniu3@proyecto-coder-backend-354a1.iam.gserviceaccount.com",
        "client_id": "100064763710908169698",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-iniu3%40proyecto-coder-backend-354a1.iam.gserviceaccount.com"
      }
}

module.exports = options;
