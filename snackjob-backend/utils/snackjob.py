from utils.dict.experiences import experience_list
from utils.dict.positions import position_list
from utils.dict.reinforcement import reinforcement_list
from utils.dict.society import society_list
from utils.dict.tech import tech_list

def get_snack_job(power_stats):

    snack_job = ""

    # exp
    power = 0
    for element in power_stats[1]:
        power += float(element)/power_stats[1][power_stats[0]]
    power = int(power)
    snack_job += experience_list[power % len(experience_list)] + ' '

    # position
    power = 0
    for element in power_stats[1]:
        power += element%power_stats[1][power_stats[0]]
    power = int(power)
    snack_job += position_list[power % len(position_list)] + ' '

    # tech
    power = 0
    for element in power_stats[1]:
        power += float(element)/power_stats[1][power_stats[0]]
    power = int(power)
    snack_job += tech_list[power % len(tech_list)] + ' '

    # reinforcementes
    if sum(power_stats[1]) % 2:
        power = 0.
        for element in power_stats[1]:
            power /= element+power_stats[1][power_stats[0]]
        power = int(power)
        snack_job += reinforcement_list[power % len(reinforcement_list)] + ' '

    power = 0.
    for element in power_stats[1]:
        power += element+power_stats[1][power_stats[0]]
    power = int(power)

    snack_job += '@ ' + society_list[power % len(society_list)]

    return snack_job

