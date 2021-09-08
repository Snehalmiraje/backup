package com.Customer.jwtutil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.Customer.services.JwtFilterReq;
import com.Customer.services.customerService;

@Configuration
@EnableWebSecurity

public class security extends WebSecurityConfigurerAdapter {

    @Autowired
    private customerService userDetailsService;

    @Autowired
    private JwtFilterReq jwtFilterReq;

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("*.js")
                .antMatchers("*.css")
        .antMatchers("/v2/api-docs", "/configuration/ui", "/swagger-resources/**", "/configuration/**", "/swagger-ui.html", "/webjars/**");
    }


    @Bean
    public PasswordEncoder getPasswordEncoder(){

        return NoOpPasswordEncoder.getInstance();
    }


    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().disable();
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
                .antMatchers("/customer/authenticate").permitAll()
                .antMatchers("/customer/test").permitAll()
                .antMatchers("/customer/create").permitAll()
                .antMatchers("/customer/getAll","/customer/get").permitAll()
                .antMatchers("/v2/api-docs/**").permitAll()
                .antMatchers("/swagger.json").permitAll()
                .antMatchers("/swagger-ui.html").permitAll()
                .antMatchers("/swagger-resources/**").permitAll()
                .antMatchers("/webjars/**").permitAll()
                .anyRequest().authenticated().and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        ;http.addFilterBefore(jwtFilterReq, UsernamePasswordAuthenticationFilter.class);
    }



    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }
    


}