package com.stackroute.product.muzixapp;

import com.stackroute.product.muzixapp.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class MuzixappApplication {

	public static void main(String[] args) {
		SpringApplication.run(MuzixappApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean  filterUrl(){
		// returns list of Intercepted URLs along with verification process
		FilterRegistrationBean frb = new FilterRegistrationBean();
		// which verification process to be followed
		frb.setFilter(new JwtFilter());
		// which URLs to be intercepted
		// "/product-app-v1/get-add-users"
		frb.addUrlPatterns("/product-app-v1/get-user-details","/product-app-v1/add-product-to-user",
				"/product-app-v1/remove-product-to-user",
				"/product-app-v1/admin/add-new-product","/product-app-v1/admin/update-product",
				"/product-app-v1/admin/delete-product");
		return frb;
	}

	@Bean
	public FilterRegistrationBean filterRegistrationBean(){
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:4200");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**",config);
		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
}


















/*
@Bean
	public FilterRegistrationBean jwtFilter(){
		// returns list of intercepted URLs with defined JwtFilter class
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());
		frb.addUrlPatterns("/product-app-v1/get-all-users","/product-app-v1/add-product");
		return frb;
	}

 */