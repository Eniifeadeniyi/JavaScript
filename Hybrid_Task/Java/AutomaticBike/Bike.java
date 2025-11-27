public class Bike {
    private boolean isOn;
    private int gear;
    private double speed;

public void turnOn(){
    isOn = true;
}

public void turnOff(){
    isOn = false;
    speed = 0;
}

public boolean getIsOn(){
    return isOn;
}

public void accelerate(){
    if(isOn == true){
    setGear();
    if(gear == 1) speed++;
    else if(gear == 2) speed += 2;
    else if(gear == 3) speed += 3;
    else if(gear == 4) speed += 4;
    setGear();
    }
}

public void decelerate(){
    if(isOn == true && speed > 0){
    setGear();
    if(gear == 1) speed--;
    else if(gear == 2) speed -= 2;
    else if(gear == 3) speed -= 3;
    else if(gear == 4) speed -= 4;
    if(speed < 0) speed = 0;
    setGear();
    }
}

public void setGear(){
    if(speed > - 1 && speed < 21) gear = 1;
    else if(speed > 20 && speed < 31) gear = 2;
    else if(speed > 30 && speed < 41) gear = 3;
    else gear = 4;
}

public int getGear(){
    return gear;
}

public double getSpeed(){
    return speed;
}

}
