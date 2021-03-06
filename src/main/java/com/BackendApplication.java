package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice;

import java.util.Collections;

@SpringBootApplication
public class BackendApplication {

    @ControllerAdvice
    public static class JsonpAdvice extends AbstractJsonpResponseBodyAdvice {
        public JsonpAdvice() {
            super("callback");
        }
    }

    /**
     * GET /create  --> Create a new user and save it in the database.
     */
    @Bean
    public HttpMessageConverters customConverters() {
        return new HttpMessageConverters(false, Collections.<HttpMessageConverter<?>>singleton(new MappingJackson2HttpMessageConverter()));
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
    //test
}
