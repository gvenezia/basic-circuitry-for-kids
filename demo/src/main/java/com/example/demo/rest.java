package com.example.demo;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.concurrent.atomic.AtomicLong;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class rest {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/and/{arduinoCode}")
    public String greeting(@PathVariable("arduinoCode") String arduinoCode) throws InterruptedException, IOException {
	    BufferedWriter writer = new BufferedWriter(new FileWriter("/Users/Guy/Documents/Software/Hackathons/learn-you-dragon/file.txt"));
	    writer.write(arduinoCode);

	    writer.close();

	    Thread.sleep(10000);

	    writer = new BufferedWriter(new FileWriter("/Users/Guy/Documents/Software/Hackathons/learn-you-dragon/file.txt"));
	    writer.write("0");

	    writer.close();
	    

	    return "success";
    }
}