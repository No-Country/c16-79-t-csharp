﻿using AutoMapper;
using Veterinaria.Application.DTO;
using Veterinaria.Domain.Models;
using Veterinaria.Infrastructure.Authentication;

namespace WebApi.Utilities
{
    public class AutomapperProfile : Profile
    {
        public AutomapperProfile()
        {
            CreateMap<PetCreationDTO, Pet>().ForMember(d => d.Birthday, opt => opt.MapFrom(o => DateOnly.ParseExact(o.Birthday, "dd/MM/yyyy")))
                                            .ForMember(d => d.Id, o => o.Ignore())
                                            .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Pet, PetDTO>().ForMember(d => d.Birthday, opt => opt.MapFrom(o => o.Birthday.ToString("dd/MM/yyyy")));


            CreateMap<AddressCreationDTO, Address>().ForMember(d => d.Id, o => o.Ignore())
                                                    .ForMember(d => d.ClientUser, o => o.Ignore());
            CreateMap<Address, AddressDTO>();


            CreateMap<ApplicationUserAccount, UserAccountResponseRegisterDTO>();
            CreateMap<ApplicationUserAccount, ClientUser>().ForMember(d => d.UserAccountId, opt => opt.MapFrom(o => o.Id));
            CreateMap<ApplicationUserAccount, ClientUserDTO>().ForMember(d => d.UserAccountId, opt => opt.MapFrom(o => o.Id));
            CreateMap<ClientUser, ClientUserDTO>().ForMember(d => d.Addresses, opt => opt.MapFrom(o => o.Addresses));
            CreateMap<ClientUserDataUpdateDTO, ClientUser>().ForMember(d => d.Id, o => o.Ignore());
            CreateMap<UserAccountResponseLoginDTO, UserAccountLoginDTO>();
            CreateMap<UserAccountResponseRegisterDTO, UserAccountRegisterDTO>();

        }
    }
}
