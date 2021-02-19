package com.manita.testing.exception;

public class CustomException extends RuntimeException{
    public CustomException(String exceptionMessage, Exception exception){
        super(exceptionMessage, exception);
    }

    public CustomException(String exceptionMessage){
        super(exceptionMessage);
    }
}
