package app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages="app")
public class AppConfiguration {

    public static void main(String[] args) {
        SpringApplication.run(AppConfiguration.class, args);
    }
}
