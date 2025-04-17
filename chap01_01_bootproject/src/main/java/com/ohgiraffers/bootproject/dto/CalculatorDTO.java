package com.ohgiraffers.bootproject.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class CalculatorDTO {
	@NonNull
	private int num1;
	@NonNull
	private int num2;
	private int sum;
	
	public CalculatorDTO(int num1, int num2) {
		this.num1 = num1;
		this.num2 = num2;
	}
}
